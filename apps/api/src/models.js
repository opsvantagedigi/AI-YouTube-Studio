/**
 * Simple JS models used by the mocked API (runtime only).
 */

// JobStatus: 'created' | 'processing' | 'rendered' | 'uploaded' | 'failed'

exports.createVideoJobPlaceholder = function (id, prompt) {
  return { id, status: 'created', prompt, createdAt: new Date().toISOString() };
};
