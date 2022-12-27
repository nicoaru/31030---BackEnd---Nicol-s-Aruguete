const htmlTemplateGenerator = (colors) => {

    const colorsList = colors.map(color => `<li style="color: ${color}">${color}</li>`).join('')

    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- BootStrap -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <title>Entrega Clase 47</title>
        </head>
        <body>
            <form class="row g-3" method="post" action="/">
                <div class="col-md-6">
                    <label for="inputColor" class="form-label">Color</label>
                    <input type="text" class="form-control" name="inputColor" id="inputColor">
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </div>
            </form>
    
            
            <ul>
                ${colorsList}
            </ul>
    
            
            <!-- BootStrap -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        </body>
    </html>`

    return htmlTemplate
}


export {htmlTemplateGenerator}