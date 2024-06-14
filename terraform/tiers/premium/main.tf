provider "google" {
  project = var.google_project_id
}

module "application" {
  source = "./cloudrun"

  tenant_id = var.tenant_id
}


terraform {
  backend "gcs" {}
}