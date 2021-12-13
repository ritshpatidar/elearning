export interface User {
    username: string,
    emial: string,
    password: string,
    courses_enrolled:[]
}

/*
{
    "message": "User Registered Successfully",
    "results": {
        "user": {
            "username": "ritess",
            "email": "ritess@gmail.com",
            "pswd": "ritess",
            "confirm_password": "ritess",
            "courses_enrolled": [],
            "_id": "61b58e97556f3baf7bc4ebcb",
            "__v": 0
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJpdGVzcyIsImlhdCI6MTYzOTI4ODQ3MiwiZXhwIjoxNjM5MzA2NDcyfQ.ID31Qeyk9viGnje_ip33OnohcL3X7u9lEoFFkNnODQw"
    }
}
*/