var body = $response.body;
body = '\/*\n@supported 327678F2B82B\n*\/\n' + body;

$done(body);
