<!DOCTYPE html>
<html lang="en">
<head>
    @include('head')
</head>
<body>
    <div id="wrapper">
        @include('header')
        
        @yield('content')
        
        @include('footer')
    </div>
<!-- /.wrapper -->

@include('foot')


</body>
</html>
