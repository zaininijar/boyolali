const showPassword = (e) => {
    const targetEl = e.currentTarget;
    const targetControl = document.getElementById(targetEl.dataset.control);
    const eyeClose = e.currentTarget.children[1];
    const eyeOpen = e.currentTarget.children[0];

    if (targetEl.dataset.isShow === "true") {
      eyeOpen.classList.add("hidden");
      eyeClose.classList.remove("hidden");
      targetEl.dataset.isShow = "false";

      targetControl.type = "password";

      return false;
    }

    eyeOpen.classList.remove("hidden");
    eyeClose.classList.add("hidden");
    targetEl.dataset.isShow = "true";

    targetControl.type = "text";
  };

  const inputValidation = (e) => {
    const targetEl = e.currentTarget;
    const controlEl = document.getElementById(targetEl.dataset.control);

    if (targetEl.value.length < 1) {
      targetEl.setAttribute("autofocus", "true");
      targetEl.classList.add("__input-error");
      controlEl.classList.remove("hidden");
    } else {
      targetEl.classList.remove("__input-error");
      controlEl.classList.add("hidden");
    }
  };