resource "google_cloud_run_service" "cloudrun" {
  name     = "list-foto-basic-${var.tenant_id}"
  location = "asia-southeast1"

  template {
    spec {
      containers {
        image = "asia-southeast1-docker.pkg.dev/marcell-new/app-images/list-foto:latest"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "run_all_users" {
  service  = google_cloud_run_service.cloudrun.name
  location = google_cloud_run_service.cloudrun.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}