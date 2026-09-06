<div align="center">

# 📘 Technical Session 15

**الفولدر:** `TECH-D15`

</div>

---

## 🧠 المواضيع اللي درسناها في السيشن

### 1. Browser Storage (تخزين البيانات في المتصفح)

- **Cookies**
    - قراءة وكتابة الـ Cookies باستخدام `document.cookie`
    - تعيين قيمة Cookie مع `expires`
    - حذف Cookie عن طريق تعيين تاريخ انتهاء قديم
    - استخدام `SameSite` و `Secure`

- **localStorage**
    - `localStorage.setItem(key, value)` — تخزين بيانات
    - `localStorage.getItem(key)` — قراءة بيانات
    - `localStorage.removeItem(key)` — حذف بيانات
    - البيانات بتفضل موجودة حتى بعد إغلاق المتصفح

- **sessionStorage**
    - `sessionStorage.setItem(key, value)`
    - `sessionStorage.getItem(key)`
    - البيانات بتتلاشى لما يتقفل الـ Tab أو الـ Window

- الفرق بين Cookies و localStorage و sessionStorage

### 2. التعامل مع البيانات من الـ Form

- قراءة قيم الـ Inputs:
    - `getElementById()`
    - `querySelector('input[name="gender"]:checked')`
- منع الـ Default Behavior باستخدام `event.preventDefault()`
- إرسال البيانات لصفحة تانية عن طريق Query Parameters:
    - `window.location.href = "page.html?name=...&email=..."`

### 3. Objects & Classes في JavaScript

- **Object Literal**

    ```js
    var Person = {
        name: "John",
        age: 30,
        walk: function () {
            console.log("walking");
        },
    };
    ```

- **Class Declaration**

    ```js
    class Person {
        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        display = () => {
            console.log(this.name);
            console.log(this.age);
        };
    }
    ```

- إنشاء Object من Class باستخدام `new`
- استخدام Arrow Function كـ Method داخل الـ Class
- الفرق بين Object Literal و Class

### 4. Recap على الـ DOM (مراجعة سريعة)

- `document.getElementsByTagName()`
- `document.createElement()`
- `appendChild()`
- `querySelectorAll()`
- التحكم في الـ Style عن طريق `element.style`

---

## 📝 الأسينمنت بتاع السيشن

التاسكات بتاعة السيشن موجودة جوه فولدر `day15`.

---

## 📂 طريقة الرفع

1. اعمل فولدر باسمك (الـ GitHub username بتاعك) جوه فولدر السيشن ده لو أول مرة.
2. حط حلولك جوه الفولدر بتاعك.
3. ارفع بالأوامر المعتادة:

```bash
git pull
git add .
git commit -m "Day 15 - اسمك"
git push
```

---

<div align="center">

**تاريخ التسليم:** قبل ميعاد السيشن الجاية

</div>
