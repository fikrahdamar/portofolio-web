export interface Certificate {
  name: string;
  from: string;
  issued: string;
  expired: string;
  credentialId: string;
  licenseUrl: string;
}

export interface CertificatesData {
  [key: string]: Certificate[];
}
