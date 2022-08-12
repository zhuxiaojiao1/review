FROM node:16.15.1 AS builder
WORKDIR /app
COPY . .
WORKDIR /app/App
RUN yarn && yarn build

FROM nginx
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
# --from=<name>
# 从 from 指定的构建阶段中寻找源文件 <src>
COPY --from=builder /app/App/build .
COPY nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx","-g","daemon off;"]

# daemon on | off; 默认为 on
# 确定nginx是否应该成为守护进程