<html>
<head>
	<title>Botswana</title>

	<link rel="stylesheet" href="botswana.css" type="text/css" media="screen" charset="utf-8" />	

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script> 
	<script type="text/javascript" src="draw.js"></script> 
	<script type="text/javascript" src="botswana.js"></script> 
</head>

<body>
	<header>
		<h1>Botswana: Javascript Bot Wars</h1>

		<label>Bot #1:</label> <input type="text" name="bot1url" id="bot1url" placeholder="URL" value="bots/crusher.js" />
		<label>Bot #2:</label> <input type="text" name="bot2url" id="bot2url" placeholder="URL" value="bots/stealth.js" />

		<input type="button" id="go_button" name="go_button" value="Go" />
	</header>

	<section id="container">
		<canvas width="1000" height="600" id="canvas" />
	</section>
</body>

</html>
