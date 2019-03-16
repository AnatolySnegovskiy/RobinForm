<h1 style="text-align:center; font-size:60px;">RobinForm</h1>

<p>his script is designed to make it easier to get the html content of the page with the data that was entered in the form fields.</p>

Use:
<code>
<head><br>
    <meta charset="utf-8"><br>
    <title>Exemple RobinForm</title><br>
    <script src="../src/RobinForm.js"></script><br>
</head><br>
<br>
...<br>
<br>
<script type="text/javascript"><br>
    document.addEventListener('DOMContentLoaded', function() {<br>
        robinForm('form');<br>
    })<br>
</script><br>
</code>

<p>In the function "robinForm" as a parameter specify the block from which you want to process the fields</p>
