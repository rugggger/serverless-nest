import { Injectable, PipeTransform, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class AuthDevPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    return {
      "claims": {
        "at_hash": "DruTWG3onDOBmaq3Cb3gQg",
        "sub": "928584c4-0061-7043-84ef-4fcb92db6e68",
        "cognito:groups": "eu-west-1_wdX1z5e3m_Google,USERS",
        "email_verified": "false",
        "cognito:preferred_role": "arn:aws:iam::203918888758:role/amplify-d2usy6cdtdjwd5-de-amplifyAuthUSERSGroupRole-vlKiNRsp7g30",
        "iss": "https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_wdX1z5e3m",
        "cognito:username": "google_105231934780827471165",
        "given_name": "Yaron",
        "origin_jti": "0709d229-e5e0-4a38-9357-cd353734afd5",
        "cognito:roles": "arn:aws:iam::203918888758:role/amplify-d2usy6cdtdjwd5-de-amplifyAuthUSERSGroupRole-vlKiNRsp7g30",
        "aud": "6hca7e5f1hqkonsgfh7bq1lsnv",
        "identities": "{\"dateCreated\":\"1726743746954\",\"userId\":\"105231934780827471165\",\"providerName\":\"Google\",\"providerType\":\"Google\",\"issuer\":null,\"primary\":\"true\"}",
        "token_use": "id",
        "auth_time": "1727196552",
        "name": "Yaron Bar",
        "exp": "Thu Sep 26 09:22:46 UTC 2024",
        "iat": "Thu Sep 26 08:22:46 UTC 2024",
        "family_name": "Bar",
        "jti": "7247c875-cf92-4b58-acf3-80f584c132e7",
        "email": "bar.yaron2018@gmail.com"
      },
      "username": "google_105231934780827471165"
    }
  }
}
