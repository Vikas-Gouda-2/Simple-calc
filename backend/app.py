from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/calc', methods=['POST'])
def calculate():
    data = request.get_json()
    try:
        expr = data.get('expression', '')
        # WARNING: eval is dangerous in production! Use a safe parser for real apps.
        result = eval(expr, {'__builtins__': None}, {})
        return jsonify({'result': result})
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/')
def home():
    return 'Flask Calculator Backend Running!'

if __name__ == '__main__':
    app.run(debug=True)
