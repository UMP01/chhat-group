<?php

return [
    'paths' => ['*'], // Allows all routes
    'allowed_methods' => ['*'], // Allows all HTTP methods (GET, POST, etc.)
    'allowed_origins' => ['http://localhost:5173'], // Allows requests from any origin
    'allowed_headers' => ['*'], // Allows all headers
    'supports_credentials' => true, // Allows cookies to be sent with requests
    'max_age' => 0, // No caching of preflight requests
];



