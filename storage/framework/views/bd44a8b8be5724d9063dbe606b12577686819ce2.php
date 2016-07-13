<!DOCTYPE html>
<html lang="en">
<head>
    <?php echo $__env->make('head', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
</head>
<body>
    <div id="wrapper">
        <?php echo $__env->make('header', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        
        <?php echo $__env->yieldContent('content'); ?>
        
        <?php echo $__env->make('footer', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
    </div>
<!-- /.wrapper -->

<?php echo $__env->make('foot', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>


</body>
</html>
