provider "google" {
  project = var.provider_id
}

module "compute" {
  source = "./cloudrun"

  tenant_id = var.tenant_id
}


terraform {
  backend "gcs" {}
}