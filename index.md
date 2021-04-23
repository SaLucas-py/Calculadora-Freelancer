<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>

    <title>Document</title>

</head>
<body>
    <header>
        <img src="images/logo.png" alt="some text" width=350 height=140>
    </header>
    <div class="container">
        <div class="box">
            <form class="form">
                <p class="title">Valor do projeto | R$ </p>
                <input id="valorProjeto" min="0"type="number" value="R$" required/>

                <p class="title">Horas Diárias </p>
                <input id="horasDiarias" min="0"type="number" required/>

                <p class="title">Qtd dias Trabalhados</p>
                <input id="diasEfetivos" min="0"type="number" required/>

                <p class="title">Qtd dias parado </p>
                <input id="diasFerias" min="0"type="number" required/>

                
            </form>
            <Button class="btn1" onclick="calcular()">Calcular</Button>
            <div class="result-calc" >
                <span class="span-calc" id="result"></span>
            </div> 
           
        </div>
                           
    </div>
<script src="script.js"></script>

<footer><p>© Created By: Lucas | 2020</p></footer>

</body>

</html>