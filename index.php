<?php
$kernel_logs = include('php/kernel-load.php');
$bsd_menu = include('php/bsd-menu.php');
?>

<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/boot.css">
  <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/bsd-menu.css">
</head>
<body>
  <div id="boot-screen">
      <?php foreach ($kernel_logs as $line): ?>
          <div class="boot-line" data-text="<?php echo esc_html($line); ?>"></div>
      <?php endforeach; ?>
  </div>

  <div id="bsd-menu" style="display:none;">
    <pre><?php echo $ascii_art; ?></pre>
    <ul>
      <?php foreach ($bsd_menu_items as $item): ?>
        <li data-link="<?php echo $item['link']; ?>"><?php echo $item['label']; ?></li>
      <?php endforeach; ?>
    </ul>
  </div>

  <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/boot.js"></script>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/bsd-menu.js"></script>
</body>
</html>

