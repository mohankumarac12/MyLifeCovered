<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Unsubscribe</title>
<link rel="stylesheet" href="resources/css/myLifeCoveredRGility.css">

</head>
<body>
	<form action="emailUnsubscribe.do" method="POST" name="unsubscribeMail">
		<div>
			<p class="unsubscribe">
				<input type="text" id="email" name="email" size="35"
					value=${unsubscribeMail} readonly> <input type="submit"
					value="Unsubscribe"><br>
			</p>
			<p class="successMsg">${success}${failed}</p>
		</div>
	</form>
</body>
</html>