# cities-info

<h1 align="center">Cities-Info</a> 

<h2>Cities-Info использует слудующие библиотеки:</h2>
<ul>
  <li>region - <a target="_blank" href="https://github.com/hflabs/region">https://github.com/hflabs/region</a></li>
  <li>sklonyator - <a target="_blank" href="https://github.com/karl93rus/gorodki">https://github.com/karl93rus/gorodki</a></li>
</ul>

```{JavaScript}npm install cities-info```

```{JavaScript}const Cities = require('cities-info')```

<h2>В данном объекте содержатся несколько методов:</h2>
<h3>getCities</h3>

```{JavaScript}const cities = Cities.getCities()```

<p>Данный метод является синхронным и возвращает список всех регионов РФ и все присутствующие поля</p>

<ul>
  <li>name - Название региона</li>
  <li>type - Тип (АО - автономный округ, г - городб Аобл - автономная область, обл - область и т.д.)</li>
  <li>name_with_type - Канкатенация типа региона и его название</li>
  <li>name_with_type - Канкатенация типа региона и его название</li>
  <li>kladr_id - КЛАДР-код региона</li>
  <li>fias_id - ФИАС-код региона</li>
  <li>okato - ОКАТО-код региона</li>
  <li>oktmo - ОКТМО-код региона</li>
  <li>tax_office - ИФНС-код региона</li>
  <li>postal_code - почтовый индекс региона</li>
  <li>iso_code - ISO-код региона</li>
  <li>iso_code - временная зона региона / часовой пояс</li>
  <li>geoname_code - код региона по GeoNames</li>
  <li>geoname_id - идентификатор региона по GeoNames</li>
  <li>geoname_name - название региона по GeoNames</li>
</ul>

<p>Если вам не нужен весь список регионов, можно провести фильтрацию, передав первым параметром в метод <strong>getCities</strong> набор опций:</p>

```{JavaScript}function getWithFilter (element) {```
```{JavaScript}  return element.name.includes('Москва')```
```{JavaScript}}```
```{JavaScript}```
```{JavaScript}const cities = Cities.getCity({ where: getWithFilter })```

<p>Если вам не нужны все параметры элемента, то вторым методом можно передать массив с перечисленными значениями в виде строки:</p>

```{JavaScript}function getWithFilter (element) {```
```{JavaScript}  return element.name.includes('Москва')```
```{JavaScript}}```
```{JavaScript}```
```{JavaScript}const cities = Cities.getCity({ where: getWithFilter }, ['name', 'type', 'name_with_type'])```

<p>Так же можно получить название города в предложном падеже:</p>

```{JavaScript}function getWithFilter (element) {```
```{JavaScript}  return element.name.includes('Москва')```
```{JavaScript}}```
```{JavaScript}```
```{JavaScript}const cities = Cities.getCity({ where: getWithFilter, sklonyator: true })```

<p>В таком случае в объект добавятся два новых параметра: sklon и sklonGeo для русского и английского языка</p>

<h2>В случае, если вам нет необходимости использовать массив регионов, вы можете использовать метод <strong>sklon</strong></h2>

```{JavaScript} const cities = Cities.sklon('Смоленск') ```
```{JavaScript} console.log(cities) //  Смоленске ```

<h1>Удачного использования</h1>
