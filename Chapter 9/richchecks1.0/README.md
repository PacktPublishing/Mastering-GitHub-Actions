# Update/Create a Rich Check

![License](https://img.shields.io/github/license/JediSchools/RichChecks)

A GitHub Action that enables you to update or create rich checks. Part of the teachings from the *GitHub Mastery Book*.

### Features

- Create a new check run.
- Update an existing check run.
- Support for annotations and images in checks.
- Configurable fail behaviors based on check conclusions.

### Prerequisites

Ensure you have a workflow set up on your repository. For more details, refer to [Creating a workflow file](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions#create-an-example-workflow).

### Usage

```yaml
steps:
  - name: Update/Create a Rich Check
    uses: JediSchools/RichChecks@1.0
    with:
      name: 'Name of the check'
      status: 'queued'
      title: 'Check Title'
      summary: 'Check Summary'
      # and other input parameters as required
```

### Inputs

| Name          | Description   | Required | Default |
|---------------|---------------|----------|---------|
| `name`        | The name of the check. | ✅ | |
| `status`      | The status of the check (`queued`, `in_progress` or `completed`). | ✅ | |
| `title`       | The title to put on the check panel. | ✅ | |
| `summary`     | The summary of the check runs current result. | ✅ | |
| `details`     | The details for the check. | | |
| `conclusion`  | The conclusion of the check. Values: `action_required`, `cancelled`, `failure`, `neutral`, `success`, `skipped`, `stale`, `timed_out`. | | |
| `check-run-id`| If set, this check run will be updated. | | |
| `github-token`| Github token for API requests. | | `${{ github.token }}` |
| `annotations` | Annotations of your check (JSON Object). | | |
| `images`      | Add images to your check (JSON Object). | | |
| `fail-on-error` | Fail if `conclusion` is not `success` or `neutral`. | | |
| `fail-on-neutral` | Fail if `conclusion` is `neutral`. | | |

### Outputs

- `check-run-id`: Contains the check run id of the check created or updated.

### Contributing

If you'd like to contribute to this project, please open an issue or send a pull request.

### License

This project is licensed under the MIT License. See [LICENSE](./LICENSE.txt) for details.

### Contact

- Author: JediSchools
- GitHub: [@JediSchools](https://github.com/JediSchools)
