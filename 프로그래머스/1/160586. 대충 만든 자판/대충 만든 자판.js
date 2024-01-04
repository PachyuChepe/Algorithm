function solution(keymap, targets) {
	const keyPressMap = {};

	keymap.forEach((keyString, keyIndex) => {
			keyString.split("").forEach((character, charIndex) => {
					keyPressMap[character] = Math.min(keyPressMap[character] || Infinity, charIndex + 1);
			});
	});

	return targets.map(target => {
			const totalKeyPresses = [...target].reduce((total, char) => total + keyPressMap[char], 0);
			return totalKeyPresses < Infinity ? totalKeyPresses : -1;
	});
}