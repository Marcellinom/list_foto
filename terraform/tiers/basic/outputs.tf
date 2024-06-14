output "metadata" {
  value = {
    compute = {
        compute_url = module.compute.compute_url
    }
  }
}