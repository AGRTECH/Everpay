async function update() {
  const t1 = new Date();
  await everpay.stream(receiver, tokens("3000"), tether.address, 0, 15, {
    from: sender,
  });
  setTimeout(update, Math.max(0, 1000 - new Date() + t1));
}
update();
