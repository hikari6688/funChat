docker run -d -it --name nginx -p 80:80
 -v /home/nginx/html:/usr/share/nginx/html
 -v /home/nginx/conf/nginx.conf:/etc/nginx.conf
 -v /home/nginx/logs:/var/log/nginx nginx


 docker run -d -it --name nginx -p 80:80 -v /home/nginx/html:/usr/share/nginx/html -v /home/nginx/conf/nginx.conf:/etc/nginx.conf -v /home/nginx/logs:/var/log/nginx nginx