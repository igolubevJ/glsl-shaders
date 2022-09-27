void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position * 1.5, 1.0);
}
