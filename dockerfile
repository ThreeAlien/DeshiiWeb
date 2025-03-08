# 使用 Nginx 作為 Web 伺服器
FROM nginx:alpine

# 設定工作目錄
WORKDIR /usr/share/nginx/html

# 清除預設的 Nginx 靜態文件
RUN rm -rf ./*

# 複製 Angular 編譯後的文件到 Nginx 目錄
COPY dist/my-angular-app /usr/share/nginx/html

# 複製 Nginx 設定檔（可選）
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]
