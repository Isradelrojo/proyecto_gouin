from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)
app.config['DEBUG'] = True
#//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


DB_NAME = "obopop_de_gouin.db"

def init_db():
    with sqlite3.connect(DB_NAME) as conn:
        conn.execute('''CREATE TABLE IF NOT EXISTS comments (
                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                            name TEXT NOT NULL,
                            comment TEXT NOT NULL,
                            rating INTEGER CHECK(rating BETWEEN 1 AND 5),
                            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                        )''')

@app.route("/comentarios", methods=["GET", "POST"])
def comentarios():
    init_db()
    if request.method == "POST":
        name = request.form["name"]
        comment = request.form["comment"]
        rating = int(request.form["rating"])
        with sqlite3.connect(DB_NAME) as conn:
            conn.execute("INSERT INTO comments (name, comment, rating) VALUES (?, ?, ?)",
                         (name, comment, rating))
        return redirect("/comentarios")
    
    with sqlite3.connect(DB_NAME) as conn:
        conn.row_factory = sqlite3.Row
        comments = conn.execute("SELECT * FROM comments ORDER BY created_at DESC").fetchall()
    
    return render_template("comentarios.html", comments=comments)


#//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
#@app.route('/')
#def home():
#    return render_template('base.html') 
@app.route('/')
@app.route('/inicio')
def inicio():
    return render_template('inicio.html') 

@app.route('/local')
def local():
    return render_template('local.html')    

@app.route('/comollegar')
def comollegar():
    return render_template('como_llegar.html')   




if __name__ == '__main__':
    app.run(debug=True)