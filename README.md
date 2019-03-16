<h1 style="text-align:center; font-size:60px;">RobinForm</h1>

<p>his script is designed to make it easier to get the html content of the page with the data that was entered in the form fields.</p>

Use:

```  
<head>
    
    <meta charset="utf-8">
    
    <title>Exemple RobinForm</title>
    
    <script src="../src/RobinForm.js"></script>
    
</head>

------

<script type="text/javascript"><br>
    
    document.addEventListener('DOMContentLoaded', function() {
    
        robinForm('form');
        
    })
    
</script>
...

<p>In the function "robinForm" as a parameter specify the block from which you want to process the fields</p>
