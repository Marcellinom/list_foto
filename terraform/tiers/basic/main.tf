provider "google" {
  project = var.provider_id
}

module "application" {
  source = "./cloudrun"

  tenant_id = var.tenant_id
}


terraform {
  backend "gcs" {}
}