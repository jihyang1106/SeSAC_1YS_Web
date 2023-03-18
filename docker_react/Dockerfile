# #부모 이미지 지정
# FROM nginx
# #root에 app 폴더 생성
# RUN mkdir /app
# #work dir 고정
# WORKDIR /app
# #work dir에 build 폴더 생성 /app/build
# RUN mkdir ./build
# #host pc의 현재경로의 build 폴더를 workdir의 build 폴더로 복사 
# ADD ./build ./build
# #nginx의 default.conf를 삭제 
# RUN rm /etc/nginx/conf.d/default.conf
# #host pc의 nginx.conf를 아래 경로에 복사 
# COPY ./nginx.conf /etc/nginx/conf.d
# #80 포트 오픈
# EXPOSE 80
# #container 실행 시 자동으로 실행할 command. nginx 시작함 
# CMD ["nginx", "-g", "daemon off;"]

#base image 
FROM nginx:1.21-alpine
#copy build files
COPY build /usr/share/nginx/html
#copy nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf
#expose port
EXPOSE 80
#start nginx server
CMD ["nginx", "-g", "daemon off;"]