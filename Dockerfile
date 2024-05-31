# Etapa 1: Construcción
FROM node:16-alpine AS build

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa 2: Servir con nginx
FROM nginx:alpine

# Copia el build generado en la etapa anterior a la ubicación de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copia el archivo de configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto
EXPOSE 80

# Comando por defecto para ejecutar nginx
CMD ["nginx", "-g", "daemon off;"]