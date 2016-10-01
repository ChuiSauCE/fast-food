<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="tr" lang="tr" dir="ltr">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="icon" href="./favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
    <title>phpMyAdmin</title>
    <link rel="stylesheet" type="text/css" href="phpmyadmin.css.php?server=1&amp;token=ede8808f6c2bde10c1bac1954af34fea&amp;js_frame=right&amp;nocache=5513178058" />
    <link rel="stylesheet" type="text/css" href="print.css" media="print" />
    <link rel="stylesheet" type="text/css" href="./themes/pmahomme/jquery/jquery-ui-1.8.16.custom.css" />
    <meta name="robots" content="noindex,nofollow" />
<script src="./js/cross_framing_protection.js?ts=1344775556" type="text/javascript"></script>
<script src="./js/jquery/jquery-1.6.2.js?ts=1344775556" type="text/javascript"></script>
<script src="./js/jquery/jquery-ui-1.8.16.custom.js?ts=1344775556" type="text/javascript"></script>
<script src="./js/update-location.js?ts=1344775556" type="text/javascript"></script>
<script src="./js/functions.js?ts=1344775556" type="text/javascript"></script>
<script src="./js/jquery/jquery.qtip-1.0.0-rc3.js?ts=1344775556" type="text/javascript"></script>
<script src="./js/messages.php?lang=tr&amp;db=fastfood&amp;token=ede8808f6c2bde10c1bac1954af34fea" type="text/javascript"></script>
<script src="./js/get_image.js.php?theme=pmahomme" type="text/javascript"></script>
<script type="text/javascript">
// <![CDATA[
if (typeof(parent.document) != 'undefined' && typeof(parent.document) != 'unknown'
    && typeof(parent.document.title) == 'string') {
    parent.document.title = 'localhost:8000 / 127.0.0.1 / fastfood | phpMyAdmin 3.5.2.2';
}
// ]]>
</script>
        <meta name="OBGZip" content="true" />
                <!--[if IE 6]>
        <style type="text/css">
        /* <![CDATA[ */
        html {
            overflow-y: scroll;
        }
        /* ]]> */
        </style>
        <![endif]-->
    </head>

    <body>
        <div id='floating_menubar'></div>
<div id='serverinfo'>
<img src="themes/dot.gif" title="" alt="" class="icon ic_s_host item" />
<a href="main.php?token=ede8808f6c2bde10c1bac1954af34fea" class="item">127.0.0.1</a>
<span class='separator item'>&nbsp;»</span>
<img src="themes/dot.gif" title="" alt="" class="icon ic_s_db item" />
<a href="db_structure.php?db=fastfood&amp;token=ede8808f6c2bde10c1bac1954af34fea" class="item">fastfood</a>
<div class="clearfloat"></div></div>
<!-- PMA-SQL-ERROR -->
    <div class="error"><h1>Hata</h1>
    <p><strong>SQL sorgusu:</strong>
<a href="db_sql.php?sql_query=SET+time_zone+%3D+%22%2B00%3A00%22&amp;show_query=1&amp;db=fastfood&amp;token=ede8808f6c2bde10c1bac1954af34fea"><span class="nowrap"><img src="themes/dot.gif" title="Düzenle" alt="Düzenle" class="icon ic_b_edit" /> Düzenle</span></a>    </p>
    <p>
        <span class="syntax"><span class="inner_sql"><a href="./url.php?url=http%3A%2F%2Fdev.mysql.com%2Fdoc%2Frefman%2F5.5%2Fen%2Fset.html&amp;token=ede8808f6c2bde10c1bac1954af34fea" target="mysql_doc"><span class="syntax_alpha syntax_alpha_reservedWord">SET</span></a> <span class="syntax_alpha syntax_alpha_identifier">time_zone</span> <a href="./url.php?url=http%3A%2F%2Fdev.mysql.com%2Fdoc%2Frefman%2F5.5%2Fen%2Fcomparison-operators.html%23operator_equal&amp;token=ede8808f6c2bde10c1bac1954af34fea" target="mysql_doc"><span class="syntax_punct">=</span></a>  <span class="syntax_quote syntax_quote_double">&quot;+00:00&quot;</span></span></span>
    </p>
<p>
    <strong>MySQL çıktısı: </strong><a href="./url.php?url=http%3A%2F%2Fdev.mysql.com%2Fdoc%2Frefman%2F5.5%2Fen%2Ferror-messages-server.html&amp;token=ede8808f6c2bde10c1bac1954af34fea" target="mysql_doc"><img src="themes/dot.gif" title="Belgeler" alt="Belgeler" class="icon ic_b_help" /></a>
</p>
<code>
#1298 - Unknown or incorrect time zone: '+00:00'
</code><br />
</div><script type="text/javascript">
//<![CDATA[
$(document).ready(function() {
// updates current settings
if (window.parent.setAll) {
    window.parent.setAll('tr', 'utf32_turkish_ci', '1', 'fastfood', '', 'ede8808f6c2bde10c1bac1954af34fea');
}
    // set current db, table and sql query in the querywindow
if (window.parent.reload_querywindow) {
    window.parent.reload_querywindow(
        'fastfood',
        '',
        '');
}
    
if (window.parent.frame_content) {
    // reset content frame name, as querywindow needs to set a unique name
    // before submitting form data, and navigation frame needs the original name
    if (typeof(window.parent.frame_content.name) != 'undefined'
     && window.parent.frame_content.name != 'frame_content') {
        window.parent.frame_content.name = 'frame_content';
    }
    if (typeof(window.parent.frame_content.id) != 'undefined'
     && window.parent.frame_content.id != 'frame_content') {
        window.parent.frame_content.id = 'frame_content';
    }
    //window.parent.frame_content.setAttribute('name', 'frame_content');
    //window.parent.frame_content.setAttribute('id', 'frame_content');
}
});

//]]>
</script>
</body>
</html>
