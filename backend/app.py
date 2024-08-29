# Define route for prediction
from flask import Flask, request, jsonify, url_for
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
from flask_cors import CORS
import numpy as np
import os
from werkzeug.utils import secure_filename

app = Flask(__name__, static_folder='static')
app.config['DEBUG'] = True
CORS(app, resources={r"/predict": {"origins": "https://majestic-pony-2b8e45.netlify.app"}})

# Folder to save uploaded images
UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load the pre-trained Keras model
model = load_model('plant_disease.h5')

# Define class labels
class_labels = [
    'Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
    'Blueberry___healthy', 'Cherry_(including_sour)___Powdery_mildew', 'Cherry_(including_sour)___healthy',
    'Corn_(maize)___Cercospora_leaf_spot_Gray_leaf_spot', 'Corn_(maize)___Common_rust_', 
    'Corn_(maize)___Northern_Leaf_Blight', 'Corn_(maize)___healthy', 'Grape___Black_rot', 
    'Grape___Esca_(Black_Measles)', 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy', 
    'Orange___Haunglongbing_(Citrus_greening)', 'Peach___Bacterial_spot', 'Peach___healthy', 
    'Pepper,_bell___Bacterial_spot', 'Pepper,_bell___healthy', 'Potato___Early_blight', 
    'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy', 'Soybean___healthy', 
    'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy', 
    'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 
    'Tomato___Leaf_Mold', 'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 
    'Tomato___Target_Spot', 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 
    'Tomato___healthy'
]

# Define class descriptions
class_info = {
    'Apple___Apple_scab': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove and destroy infected leaves. Apply fungicides as necessary.'
    },
    'Apple___Black_rot': {
        'Health_Status': 'Infected',
        'Recommendation': 'Prune out dead wood. Apply fungicides and avoid injuries to the tree.'
    },
    'Apple___Cedar_apple_rust': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove nearby juniper trees. Use fungicides during the growing season.'
    },
    'Apple___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Maintain regular watering and fertilization schedules.'
    },
    'Blueberry___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Monitor for pests and diseases. Ensure proper soil pH.'
    },
    'Cherry_(including_sour)___Powdery_mildew': {
        'Health_Status': 'Infected',
        'Recommendation': 'Prune affected areas. Apply sulfur-based fungicides.'
    },
    'Cherry_(including_sour)___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Regularly check for pests. Ensure good air circulation.'
    },
    'Corn_(maize)___Cercospora_leaf_spot_Gray_leaf_spot': {
        'Health_Status': 'Infected',
        'Recommendation': 'Rotate crops. Use resistant varieties and apply fungicides.'
    },
    'Corn_(maize)___Common_rust_': {
        'Health_Status': 'Infected',
        'Recommendation': 'Plant resistant varieties. Use fungicides if necessary.'
    },
    'Corn_(maize)___Northern_Leaf_Blight': {
        'Health_Status': 'Infected',
        'Recommendation': 'Rotate crops. Use resistant varieties and apply fungicides.'
    },
    'Corn_(maize)___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Monitor for pests and diseases. Provide adequate fertilization.'
    },
    'Grape___Black_rot': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove and destroy affected grapes. Apply fungicides regularly.'
    },
    'Grape___Esca_(Black_Measles)': {
        'Health_Status': 'Infected',
        'Recommendation': 'Prune infected areas. Apply fungicides and manage water stress.'
    },
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove infected leaves. Apply fungicides and ensure good air circulation.'
    },
    'Grape___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Continue monitoring and maintaining proper vineyard practices.'
    },
    'Orange___Haunglongbing_(Citrus_greening)': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove infected trees to prevent spread. Manage pests with insecticides.'
    },
    'Peach___Bacterial_spot': {
        'Health_Status': 'Infected',
        'Recommendation': 'Apply copper-based sprays. Remove and destroy infected leaves.'
    },
    'Peach___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Maintain regular monitoring and provide balanced fertilization.'
    },
    'Pepper,_bell___Bacterial_spot': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove infected plants. Apply copper-based fungicides.'
    },
    'Pepper,_bell___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Regularly monitor for pests. Maintain proper soil moisture.'
    },
    'Potato___Early_blight': {
        'Health_Status': 'Infected',
        'Recommendation': 'Apply fungicides early. Remove and destroy infected foliage.'
    },
    'Potato___Late_blight': {
        'Health_Status': 'Infected',
        'Recommendation': 'Use resistant varieties. Apply fungicides and manage irrigation.'
    },
    'Potato___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Maintain proper watering. Monitor for signs of disease.'
    },
    'Raspberry___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Prune regularly and maintain soil health. Watch for pests.'
    },
    'Soybean___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Regularly inspect for disease. Rotate crops annually.'
    },
    'Squash___Powdery_mildew': {
        'Health_Status': 'Infected',
        'Recommendation': 'Apply fungicides. Remove and destroy infected leaves.'
    },
    'Strawberry___Leaf_scorch': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove and destroy infected leaves. Apply fungicides.'
    },
    'Strawberry___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Monitor for pests. Maintain proper soil pH and moisture.'
    },
    'Tomato___Bacterial_spot': {
        'Health_Status': 'Infected',
        'Recommendation': 'Apply copper-based fungicides. Remove infected plants.'
    },
    'Tomato___Early_blight': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove infected leaves. Apply fungicides early in the season.'
    },
    'Tomato___Late_blight': {
        'Health_Status': 'Infected',
        'Recommendation': 'Apply fungicides. Destroy infected plants to prevent spread.'
    },
    'Tomato___Leaf_Mold': {
        'Health_Status': 'Infected',
        'Recommendation': 'Increase air circulation. Apply fungicides as needed.'
    },
    'Tomato___Septoria_leaf_spot': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove and destroy affected leaves. Apply fungicides.'
    },
    'Tomato___Spider_mites Two-spotted_spider_mite': {
        'Health_Status': 'Infected',
        'Recommendation': 'Use miticides or insecticidal soap. Increase humidity around plants.'
    },
    'Tomato___Target_Spot': {
        'Health_Status': 'Infected',
        'Recommendation': 'Apply fungicides. Remove infected leaves to prevent spread.'
    },
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove infected plants. Control whiteflies to prevent spread.'
    },
    'Tomato___Tomato_mosaic_virus': {
        'Health_Status': 'Infected',
        'Recommendation': 'Remove infected plants. Disinfect tools and avoid handling plants when wet.'
    },
    'Tomato___healthy': {
        'Health_Status': 'Healthy',
        'Recommendation': 'Maintain regular monitoring and provide proper fertilization.'
    }
}

# Define route for home page
@app.route('/')
def home():
    return "hello world"

# Define route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        image_file = request.files.get('image')
        if image_file:
            filename = secure_filename(image_file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            image_file.save(filepath)

            img = image.load_img(filepath, target_size=(256, 256))
            img_array = image.img_to_array(img) / 255.0
            img_array = np.expand_dims(img_array, axis=0)

            prediction = model.predict(img_array)
            predicted_classes = np.argmax(prediction, axis=1)
            predicted_results = [{'label': class_labels[idx], 'description': class_info[class_labels[idx]]} for idx in predicted_classes]

            image_url = url_for('static', filename=f'uploads/{filename}')
            return jsonify(predicted_results=predicted_results, image_filename=image_url)

    return jsonify({'error': 'Invalid request'}), 400

    if request.method == 'POST':
        # Check if the post request has the file part
        image_file = request.files.get('image')
        if image_file:
            # Save the uploaded image
            filename = secure_filename(image_file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            image_file.save(filepath)

            # Load and preprocess the image
            img = image.load_img(filepath, target_size=(256, 256))
            img_array = image.img_to_array(img) / 255.0
            img_array = np.expand_dims(img_array, axis=0)
            
            # Make a prediction
            prediction = model.predict(img_array)
            predicted_classes = np.argmax(prediction, axis=1)
            predicted_results = [{'label': class_labels[idx], 'description': class_info[class_labels[idx]]} for idx in predicted_classes]
            
            # Return the prediction results and image URL as JSON
            image_url = url_for('static', filename=filename)  # Generate the URL to access the image
            return jsonify(predicted_results=predicted_results, image_filename=image_url)
    
    return jsonify({'error': 'Invalid request'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)   
    app.run(debug=True)   

