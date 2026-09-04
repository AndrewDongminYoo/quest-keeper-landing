#!/usr/bin/env bash

set -euo pipefail

landing_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
app_root="${1:-${landing_root}/../quest-keeper}"

compare_document() {
	local app_document="$1"
	local landing_document="$2"

	if [[ ! -f ${app_document} ]]; then
		echo "app legal source not found: ${app_document}" >&2
		return 1
	fi
	if [[ ! -f ${landing_document} ]]; then
		echo "landing legal document not found: ${landing_document}" >&2
		return 1
	fi
	if ! cmp -s "${app_document}" "${landing_document}"; then
		diff -u "${app_document}" "${landing_document}" || true
		echo "landing legal document differs from the app source: ${landing_document}" >&2
		return 1
	fi
}

compare_document \
	"${app_root}/docs/legal/privacy-policy.md" \
	"${landing_root}/content/legal/privacy.ko.md"
compare_document \
	"${app_root}/docs/legal/terms-of-service.md" \
	"${landing_root}/content/legal/terms.ko.md"

echo "Korean legal documents match the app repository source"
