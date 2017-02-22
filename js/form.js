'use strict';

(function () {
  var uploadFile = document.querySelector('#upload-file');
  var uploadFormCancel = document.querySelector('.upload-form-cancel');
  var VALUE_SCALE = 100;
  var STEP = 25;

  uploadFile.addEventListener('change', function () {
    window.utils.showUploadOverlayElement(window.utils.setDefaultValue(VALUE_SCALE));
  });

  uploadFormCancel.addEventListener('click', function () {
    window.utils.closeUploadOverlayElement();
  });

  window.initializeScale(document.querySelector('.upload-resize-controls-value'), VALUE_SCALE, STEP);
  window.initializeFilters();

})();
