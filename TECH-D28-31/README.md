<div align="center">

# 📘 Technical Sessions 28–31

**الفولدر:** `TECH-D28-31`

</div>

---

## 🧠 المواضيع اللي درسناها في السيشنز

### ⚛️ أساسيات React والـ Components

- كتابة الـ UI باستخدام `JSX` وإنشاء الـ root باستخدام `createRoot`
- تقسيم التطبيق لـ Components مستقلة زي `NavBar` و`Cart` و`CartItem` وصفحات التطبيق
- استخدام الـ `Props` لتمرير البيانات والـ functions بين الـ Components
- استخدام `Fragment` لتجميع أكتر من عنصر من غير إضافة عنصر HTML زيادة
- عرض قائمة عناصر باستخدام `map()` وإضافة `key` لكل عنصر

### 🔄 الـ State والـ Events

- إدارة البيانات المتغيرة باستخدام `useState`
- تحديث الـ State بناءً على القيمة السابقة باستخدام functional update (`prev => prev + 1`)
- التعامل مع Events زي `onClick` وتمرير بيانات الـ Product للـ event handler
- تحديث الـ Arrays والـ Objects عن طريق عمل نسخة باستخدام spread syntax قبل التعديل
- استخدام `map()` لتصفير الـ counts و`filter()` لحذف Product
- رفع الـ State للـ Component الأب وتمرير البيانات ودوال التحديث للـ Components الأبناء عن طريق `Props`
- عرض محتوى بشكل شرطي، زي رسالة `no Items` لما السلة تكون فاضية

### 🛒 تطبيق عملي: Shopping Cart

- عرض المنتجات والـ `count` بتاع كل Product
- زيادة وتقليل عدد المنتجات، مع منع تقليل العدد عن `0`
- تصفير كل الـ counts وحذف Product من السلة
- عرض عدد المنتجات في الـ `NavBar`

### 🧭 التنقل بين الصفحات باستخدام React Router

- إعداد `BrowserRouter` واستخدام `Routes` و`Route` لتعريف الصفحات
- التنقل باستخدام `Link` و`NavLink` وإظهار الـ Link النشط باستخدام `isActive`
- التعامل مع الـ Dynamic Route Parameters باستخدام `useParams`
- قراءة الـ Query Parameters باستخدام `useSearchParams`
- التنقل برمجيًا باستخدام `useNavigate` وتمرير `state` مع التنقل
- الوصول لمعلومات الصفحة الحالية باستخدام `useLocation`
- عرض صفحة Error عند أي مسار غير معروف باستخدام `path="*"`

### 🎨 تنسيق الواجهة

- استخدام `Tailwind CSS` للـ utility classes وتنسيق عناصر الواجهة
- تعريف Component class باسم `btn-primary` داخل `@layer components`

---

## 📝 الأسينمنت بتاع السيشن

التاسكات على جروب الواتساب.

---

## 📂 طريقة الرفع

1. اعمل فولدر باسمك (الـ GitHub username بتاعك) جوه فولدر السيشن ده لو أول مرة.
2. حط حلولك جوه الفولدر بتاعك.
3. ارفع بالأوامر المعتادة:

```bash
git pull
git add .
git commit -m "Day 28-31 - اسمك"
git push
```

---

<div align="center">

**تاريخ التسليم:** قبل ميعاد السيشن الجاية

</div>
