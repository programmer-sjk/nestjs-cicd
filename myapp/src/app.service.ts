import { Injectable } from '@nestjs/common';
import {
  Route53Client,
  CreateHostedZoneCommand,
  ChangeResourceRecordSetsCommand,
  Change,
  ListHostedZonesByNameCommand,
} from '@aws-sdk/client-route-53'; // ES Modules import
import { ConfigService } from '@nestjs/config';
import {
  ACMClient,
  RequestCertificateCommand,
  GetCertificateCommand,
  DescribeCertificateCommand,
  UpdateCertificateOptionsCommand,
} from '@aws-sdk/client-acm';
import {
  ElasticLoadBalancingV2Client,
  AddListenerCertificatesCommand,
} from '@aws-sdk/client-elastic-load-balancing-v2';

@Injectable()
export class AppService {
  private readonly region = 'ap-northeast-2';

  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getMessage(): string {
    console.log('noooooooo??');
    return 'Hi~~~~~~ ECS CI/CD Rollback Test!!!!!';
  }
}
