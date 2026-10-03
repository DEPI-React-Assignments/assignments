<div align="center">

# 📘 Technical Session 23

**الفولدر:** `TECH-D23`

</div>

---

## 🧠 المواضيع اللي درسناها في السيشن

السيشن دي كانت السيشن التانية في **Bootstrap**، وأخدنا فيها مرور سريع على مجموعة كبيرة من المواضيع عشان نفهم الفكرة العامة بتاعة كل واحد منهم، وبعض الأمثلة بس هي اللي اتجربت فعليًا.

- نظام الـ Grid في Bootstrap:
  - `container` / `row` / `col`
  - تحديد عرض العمود حسب حجم الشاشة (`col-md-4`, `col-lg-2`)
  - الأعمدة اللي بتاخد المساحة المتبقية تلقائيًا (`col-md-auto`)
  - التحكم في المسافات بين الأعمدة (`justify-content-between`)
- عناصر الفورم في Bootstrap:
  - `form-control` للـ Inputs العادية
  - `form-control-plaintext` لعرض قيمة ثابتة (Read-only) بشكل نص عادي
  - `form-select` للـ Dropdown lists
  - `form-check` للـ Checkboxes
  - `input-group` لدمج عنصر مع Input (زي إضافة Label أو رمز جنب الحقل)
  - `form-floating` لعمل Labels عائمة (Floating Labels)
- الـ Form Validation في Bootstrap:
  - استخدام `novalidate` و `needs-validation` لتعطيل التحقق الافتراضي من المتصفح
  - التحقق من صحة الفورم بـ JavaScript باستخدام `form.checkValidity()`
  - إضافة كلاس `was-validated` بعد محاولة الإرسال لإظهار حالة كل حقل
  - رسائل التحقق: `valid-feedback` و `invalid-feedback`
  - منع إرسال الفورم لو فيه حقول غير صحيحة باستخدام `event.preventDefault()`
- الـ Alerts في Bootstrap:
  - إنشاء Alert ديناميكيًا بالـ JavaScript وإضافته للصفحة
  - `alert-dismissible` لعمل Alert قابل للإغلاق
  - زرار الإغلاق `btn-close` مع `data-bs-dismiss="alert"`
- الـ Bootstrap Icons وإزاي بنضيفها للمشروع ونستخدمها بكلاسات زي `bi bi-wifi-off`
- الـ Breadcrumbs (`breadcrumb`, `breadcrumb-item`) وتخصيص شكل الفاصل بينهم باستخدام CSS Variable زي `--bs-breadcrumb-divider`
- الأزرار الجاهزة في Bootstrap (`btn`, `btn-primary`) وإزاي نقدر نخصص شكلها عن طريق الـ Override على الكلاسات بتاعتها في ملف الـ CSS الخاص بينا

---

## 📝 الأسينمنت بتاع السيشن

التاسك المرة دي عبارة عن تنفيذ سايت من اللينكات اللي بعتها البشمهندس، وهنستخدم فيه Bootstrap.

### Links:

https://startbootstrap.com/previews/sb-ui-kit-pro-angular
https://startbootstrap.com/previews/sb-admin-pro
https://startbootstrap.com/previews/sb-ui-kit-pro
https://startbootstrap.com/previews/sb-ui-kit-pro-vue
https://startbootstrap.com/previews/sb-admin-pro-angular

أو نختار من هنا:
https://themeforest.net/category/site-templates/technology
---

## 📂 طريقة الرفع

1. اعمل فولدر باسمك (الـ GitHub username بتاعك) جوه فولدر السيشن ده لو أول مرة.
2. حط حلولك جوه الفولدر بتاعك.
3. ارفع بالأوامر المعتادة:

```bash
git pull
git add .
git commit -m "Day 23 - اسمك"
git push
```

---

<div align="center">

**تاريخ التسليم:** قبل ميعاد السيشن الجاية

</div>
