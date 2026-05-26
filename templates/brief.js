document.addEventListener('DOMContentLoaded', () => {
  const STORAGE = 'hb2-brief-theme-toggle';
  const body = document.body;
  const editBtn = document.getElementById('wbEditBtn');
  const uploadBtn = document.getElementById('wbUploadBtn');
  const exportBtn = document.getElementById('wbExportBtn');
  const statusEl = document.getElementById('wbStatus');
  const langButtons = [...document.querySelectorAll('[data-set-lang]')];
  const themeButtons = [...document.querySelectorAll('[data-set-theme]')];

  const messages = {
    zh: {
      loaded: '已加载新版 Brief：支持中英文切换、浅深色切换、上传图片和在线改字',
      editOn: '已进入编辑模式：直接点击当前页面文字即可修改',
      editOff: '已退出编辑模式：当前修改会保存在这个浏览器里',
      zonePicked: '已选中图片区：现在可以点顶部「上传图片」',
      uploadPick: '请选择一张图片上传到当前选中的图片区',
      noZone: '当前页面没有可上传的图片区',
      uploaded: (name) => `已上传图片：${name}`,
      cleared: '图片已清除',
      lang: '已切换为中文',
      themeLight: '已切换到浅色版',
      themeDark: '已切换到深色版'
    },
    en: {
      loaded: 'Brief ready: language switch, theme switch, image upload, and inline editing are enabled',
      editOn: 'Editing mode on: click any text in the page to revise it',
      editOff: 'Editing mode off: your changes stay saved in this browser',
      zonePicked: 'Image area selected. Use the upload button at the top now.',
      uploadPick: 'Choose an image for the currently selected placeholder',
      noZone: 'There is no image placeholder on this page',
      uploaded: (name) => `Image uploaded: ${name}`,
      cleared: 'Image cleared',
      lang: 'Switched to English',
      themeLight: 'Switched to light theme',
      themeDark: 'Switched to dark theme'
    }
  };

  const state = {
    lang: localStorage.getItem(`${STORAGE}:lang`) || 'zh',
    theme: localStorage.getItem(`${STORAGE}:theme`) || 'light',
    isEditing: false,
    activeImageZone: null
  };

  const t = (key, ...args) => {
    const entry = messages[state.lang][key];
    return typeof entry === 'function' ? entry(...args) : entry;
  };

  const setStatus = (message) => {
    statusEl.textContent = message;
  };

  const applyLanguage = (announce = false) => {
    body.dataset.lang = state.lang;
    localStorage.setItem(`${STORAGE}:lang`, state.lang);
    langButtons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.setLang === state.lang));
    if (announce) setStatus(t('lang'));
  };

  const applyTheme = (announce = false) => {
    body.dataset.theme = state.theme;
    localStorage.setItem(`${STORAGE}:theme`, state.theme);
    themeButtons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.setTheme === state.theme));
    if (announce) setStatus(state.theme === 'light' ? t('themeLight') : t('themeDark'));
  };

  const editableNodes = [...document.querySelectorAll('[data-editable="true"]')];
  editableNodes.forEach((node, index) => {
    if (!node.dataset.editKey) {
      node.dataset.editKey = `text-${index}`;
    }
    node.setAttribute('spellcheck', 'false');
    const saved = localStorage.getItem(`${STORAGE}:${node.dataset.editKey}`);
    if (saved !== null) node.innerHTML = saved;
    node.addEventListener('input', () => {
      localStorage.setItem(`${STORAGE}:${node.dataset.editKey}`, node.innerHTML);
    });
  });

  const toggleEditMode = () => {
    state.isEditing = !state.isEditing;
    body.classList.toggle('is-editing', state.isEditing);
    editableNodes.forEach((node) => {
      node.contentEditable = state.isEditing ? 'true' : 'false';
    });
    editBtn.textContent = state.lang === 'zh'
      ? (state.isEditing ? '完成编辑' : '编辑文本')
      : (state.isEditing ? 'Done Editing' : 'Edit Text');
    setStatus(state.isEditing ? t('editOn') : t('editOff'));
  };

  editBtn.addEventListener('click', toggleEditMode);

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.lang = btn.dataset.setLang;
      applyLanguage(true);
      editBtn.textContent = state.lang === 'zh'
        ? (state.isEditing ? '完成编辑' : '编辑文本')
        : (state.isEditing ? 'Done Editing' : 'Edit Text');
      uploadBtn.textContent = state.lang === 'zh' ? '上传图片' : 'Upload Image';
      exportBtn.textContent = state.lang === 'zh' ? '打印 / 保存 PDF' : 'Print / Save PDF';
    });
  });

  themeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.theme = btn.dataset.setTheme;
      applyTheme(true);
    });
  });

  const imageZones = [...document.querySelectorAll('.img-placeholder')];
  imageZones.forEach((zone, index) => {
    zone.dataset.zoneId = `img-${index}`;

    const tools = document.createElement('div');
    tools.className = 'img-tools';
    tools.innerHTML = '<button class="mini-btn" type="button">Clear</button>';

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.className = 'upload-input';

    const clearBtn = tools.querySelector('.mini-btn');
    const savedImage = localStorage.getItem(`${STORAGE}:${zone.dataset.zoneId}`);
    if (savedImage) applyImage(zone, savedImage);

    zone.appendChild(tools);
    zone.appendChild(input);

    zone.addEventListener('click', (e) => {
      if (e.target === clearBtn) return;
      state.activeImageZone = zone;
      imageZones.forEach((item) => item.classList.remove('active-target'));
      zone.classList.add('active-target');
      setStatus(t('zonePicked'));
    });

    input.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        applyImage(zone, result);
        try {
          localStorage.setItem(`${STORAGE}:${zone.dataset.zoneId}`, result);
        } catch (err) {
          console.warn('Image not saved to localStorage', err);
        }
        setStatus(t('uploaded', file.name));
      };
      reader.readAsDataURL(file);
    });

    clearBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeImage(zone);
      localStorage.removeItem(`${STORAGE}:${zone.dataset.zoneId}`);
      setStatus(t('cleared'));
    });
  });

  uploadBtn.addEventListener('click', () => {
    const target = state.activeImageZone || imageZones[0];
    if (!target) {
      setStatus(t('noZone'));
      return;
    }
    target.classList.add('active-target');
    target.querySelector('.upload-input')?.click();
    setStatus(t('uploadPick'));
  });

  exportBtn.addEventListener('click', () => window.print());

  function applyImage(zone, src) {
    let img = zone.querySelector('img.uploaded-image');
    if (!img) {
      img = document.createElement('img');
      img.className = 'uploaded-image';
      zone.appendChild(img);
    }
    img.src = src;
    zone.classList.add('has-image');
  }

  function removeImage(zone) {
    zone.classList.remove('has-image');
    const img = zone.querySelector('img.uploaded-image');
    if (img) img.remove();
    const input = zone.querySelector('.upload-input');
    if (input) input.value = '';
  }

  // ── 斜线分割双图区（第 5 页球场）────────────────────────
  const splitEl = document.getElementById('stadiumSplit');
  if (splitEl) {
    const splitLeft = document.getElementById('splitLeft');
    const splitRight = document.getElementById('splitRight');
    const uploadLeft = document.getElementById('splitUploadLeft');
    const uploadRight = document.getElementById('splitUploadRight');
    const clearLeft = document.getElementById('splitClearLeft');
    const clearRight = document.getElementById('splitClearRight');
    const placeholder = document.getElementById('splitPlaceholder');

    const SK_L = `${STORAGE}:split-left`;
    const SK_R = `${STORAGE}:split-right`;

    const applySplit = (side, src) => {
      if (side === 'left') {
        splitLeft.style.backgroundImage = `url(${src})`;
        splitEl.classList.add('has-left');
      } else {
        splitRight.style.backgroundImage = `url(${src})`;
        splitEl.classList.add('has-right');
      }
      if (splitEl.classList.contains('has-left') && splitEl.classList.contains('has-right')) {
        if (placeholder) placeholder.style.display = 'none';
      }
    };

    const clearSplit = (side) => {
      if (side === 'left') {
        splitLeft.style.backgroundImage = '';
        splitEl.classList.remove('has-left');
        localStorage.removeItem(SK_L);
        if (uploadLeft) uploadLeft.value = '';
      } else {
        splitRight.style.backgroundImage = '';
        splitEl.classList.remove('has-right');
        localStorage.removeItem(SK_R);
        if (uploadRight) uploadRight.value = '';
      }
      if (!splitEl.classList.contains('has-left') && !splitEl.classList.contains('has-right')) {
        if (placeholder) placeholder.style.display = '';
      }
    };

    const handleSplitUpload = (side, file) => {
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const src = reader.result;
        applySplit(side, src);
        try { localStorage.setItem(side === 'left' ? SK_L : SK_R, src); } catch (e) {}
        setStatus(t('uploaded', file.name));
      };
      reader.readAsDataURL(file);
    };

    if (uploadLeft) uploadLeft.addEventListener('change', e => handleSplitUpload('left', e.target.files[0]));
    if (uploadRight) uploadRight.addEventListener('change', e => handleSplitUpload('right', e.target.files[0]));
    if (clearLeft) clearLeft.addEventListener('click', e => { e.stopPropagation(); clearSplit('left'); setStatus(t('cleared')); });
    if (clearRight) clearRight.addEventListener('click', e => { e.stopPropagation(); clearSplit('right'); setStatus(t('cleared')); });

    const savedL = localStorage.getItem(SK_L);
    const savedR = localStorage.getItem(SK_R);
    if (savedL) applySplit('left', savedL);
    if (savedR) applySplit('right', savedR);
  }
  // ── end 斜线分割 ──────────────────────────────────────────

  // ── 月份 Tab 切换 ──────────────────────────────────────────
  const monthButtons = [...document.querySelectorAll('[data-set-month]')];
  const allPages = [...document.querySelectorAll('.page[data-month]')];

  const applyMonth = (month) => {
    allPages.forEach(page => {
      page.style.display = page.dataset.month === month ? '' : 'none';
    });
    monthButtons.forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.setMonth === month);
    });
    localStorage.setItem(`${STORAGE}:month`, month);
  };

  monthButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      applyMonth(btn.dataset.setMonth);
    });
  });

  const savedMonth = localStorage.getItem(`${STORAGE}:month`) || 'april';
  applyMonth(savedMonth);
  // ── end 月份 Tab ───────────────────────────────────────────

  applyLanguage();
  applyTheme();
  editBtn.textContent = state.lang === 'zh' ? '编辑文本' : 'Edit Text';
  uploadBtn.textContent = state.lang === 'zh' ? '上传图片' : 'Upload Image';
  exportBtn.textContent = state.lang === 'zh' ? '打印 / 保存 PDF' : 'Print / Save PDF';
  setStatus(t('loaded'));
});
