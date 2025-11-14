<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Message</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background-color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: Arial, sans-serif;
    }
    
    h1 {
      color: #ffffff;
      font-size: 4rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }
    
    @media (max-width: 768px) {
      h1 {
        font-size: 2.5rem;
        padding: 1rem;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <h1 id="message"></h1>
  
  <script>
    // Set the message
    document.getElementById('message').textContent = 'FUCK U GUILDA';
  </script>
</body>
</html>
