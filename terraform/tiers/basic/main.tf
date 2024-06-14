provider "google" {
  project = var.provider_id
}

module "compute" {
  source = "./cloudrun"

  tenant_id = var.infrastructure_id
}


terraform {
  backend "gcs" {}
}