from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", title="Home", header="Welcome to the Homepage", message="This is the body of the homepage.")

if __name__ == "__main__":
    app.run()
