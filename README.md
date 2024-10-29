# SpringBootAwsDeploymentUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## SpringBoot Backend Project

https://github.com/bllexe/srping-boot-aws-deployment


## Aws Bucker Policy --> Permission
{
    "Statment":[
        "Sid": "PublicReadObject",
        "Effect": "Allow",
        "Principal: "*",
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::yourbucketname/*"
    ]
}