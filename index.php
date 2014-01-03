<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Uniform &lt;select&gt; Dropdown</title>
  <link rel="stylesheet" href="uniform-select.css">
  <script>document.documentElement.className += "js-enabled";</script>
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
  <style>
    .us-month {
      min-width: 6em;
    }
  </style>
</head>
<body>
  <h1>Uniform &lt;select&gt; Dropdown</h1>

  <section rel="main" id="main">
    <div class="us-container">
      <label for="day">Day</label>
      <select name="day" id="day">
        <? for ($d = 1; $d <= 31; $d++): ?>
          <option value="<?= $d ?>"><?= $d ?></option>
        <? endfor; ?>
      </select>
    </div>

    <div class="us-container us-month">
      <label for="month">Month</label>
      <select name="month" id="month">
      <? for ($m = 1; $m <= 12; $m++): ?>
        <option value="<?= $m ?>"><?= date("F", mktime(0, 0, 0, $m, 10)) ?></option>
      <? endfor; ?>
      </select>
    </div>
  </section><!--/#main-->

  <script src="//code.jquery.com/jquery-1.10.2.min.js"></script>
  <script src="uniform-select.js"></script>
</body>
</html>