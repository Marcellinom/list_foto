provider "google" {
  project = var.provider_id
}

module "compute" {
  source = "./cloudrun"

  tenant_id = var.infrastructure_id
}


terraform {
  backend "gcs" {
    bucket = "saas-tfstate"
    prefix = "infrastructure/ngetes-tabrakan"
  }
}