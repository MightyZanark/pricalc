var translate = {};
translate.names = {
	"ヒヨリ": "Hiyori",
	"ユイ": "Yui",
	"レイ": "Rei",
	"ミソギ": "Misogi",
	"マツリ": "Matsuri",
	"アカリ": "Akari",
	"ミヤコ": "Miyako",
	"ユキ": "Yuki",
	"アンナ": "Anna",
	"マホ": "Maho",
	"リノ": "Rino",
	"ハツネ": "Hatsune",
	"ナナカ": "Nanaka",
	"カスミ": "Kasumi",
	"ミサト": "Misato",
	"スズナ": "Suzuna",
	"カオリ": "Kaori",
	"イオ": "Io",
	"ミミ": "Mimi",
	"クルミ": "Kurumi",
	"ヨリ": "Yori",
	"アヤネ": "Ayane",
	"スズメ": "Suzume",
	"リン": "Rin",
	"エリコ": "Eriko",
	"サレン": "Saren",
	"ノゾミ": "Nozomi",
	"ニノン": "Ninon",
	"シノブ": "Shinobu",
	"アキノ": "Akino",
	"マヒル": "Mahiru",
	"ユカリ": "Yukari",
	"キョウカ": "Kyouka",
	"トモ": "Tomo",
	"シオリ": "Shiori",
	"アオイ": "Aoi",
	"チカ": "Chika",
	"マコト": "Makoto",
	"イリヤ": "Ilya",
	"クウカ": "Kuka",
	"タマキ": "Tamaki",
	"ジュン": "Jun",
	"ミフユ": "Mifuyu",
	"シズル": "Shizuru",
	"ミサキ": "Misaki",
	"ミツキ": "Mitsuki",
	"リマ": "Lima",
	"モニカ": "Monika",
	"ツムギ": "Tsumugi",
	"アユミ": "Ayumi",
	"ルカ": "Luka",
	"ジータ": "Djeeta",
	"ペコリーヌ": "Pecorine",
	"キャル": "Karyl",
	"ムイミ": "Muimi",
	"アリサ": "Arisa",
	"カヤ": "Kaya",
	"コッコロ": "Kokkoro",
	"イノリ": "Inori",
	"ホマレ": "Homare",
	"ラビリスタ": "Labyrista",
	"ネネカ": "Neneka",
	"クリスティーナ": "Christina",
	"ペコリーヌ（サマー）": "Pecorine (Summer)",
	"コッコロ（サマー）": "Kokkoro (Summer)",
	"スズメ（サマー）": "Suzume (summer)",
	"キャル（サマー）": "Karyn (summer)",
	"タマキ（サマー）": "Tamaki (Summer)",
	"ミフユ（サマー）": "Mifuyu (Summer)",
	"シノブ（ハロウィン）": "Shinobu (Halloween)",
	"ミヤコ（ハロウィン）": "Miyako (Halloween)",
	"ミサキ（ハロウィン）": "Misaki (Halloween)",
	"チカ（クリスマス）": "Chika (Christmas)",
	"クルミ（クリスマス）": "Kurumi (Christmas)",
	"アヤネ（クリスマス）": "Ayane (Christmas)",
	"ヒヨリ（ニューイヤー）": "Hiyori (New Year)",
	"ユイ（ニューイヤー）": "Yui (New Year)",
	"レイ（ニューイヤー）": "Rei (New Year)",
	"エリコ（バレンタイン）": "Eriko (Valentine)",
	"シズル（バレンタイン）": "Shizuru (Valentine)",
	"アン": "Anne",
	"ルゥ": "Ru",
	"グレア": "Grea",
	"クウカ（オーエド）": "Kuka (Oed)",
	"ニノン（オーエド）": "Ninon (Oed)",
	"レム": "Rem",
	"ラム": "Ram",
	"エミリア": "Emilia",
	"スズナ（サマー）": "Suzuna (Summer)",
	"イオ（サマー）": "Io (summer)",
	"ミサキ（サマー）": "Misaki (Summer)",
	"サレン（サマー）": "Saren (Summer)",
	"マコト（サマー）": "Makoto (Summer)",
	"カオリ（サマー）": "Kaori (Summer)",
	"マホ（サマー）": "Maho (Summer)",
	"アオイ（編入生）": "Aoi (transfer student)",
	"クロエ": "Chloe",
	"チエル": "Chieru",
	"ユニ": "Yuni",
	"キョウカ（ハロウィン）": "Kyouka (Halloween)",
	"ミソギ（ハロウィン）": "Misogi (Halloween)",
	"ミミ（ハロウィン）": "Mimi (Halloween)",
	"ルナ": "Luna",
	"クリスティーナ（クリスマス）": "Christina (Christmas)",
	"ノゾミ（クリスマス）": "Nozomi (Christmas)",
	"イリヤ（クリスマス）": "Ilya (Christmas)",
	"ペコリーヌ（ニューイヤー）": "Pecorine (New Year)",
	"コッコロ（ニューイヤー）": "Kokkoro (New Year)",
	"キャル（ニューイヤー）": "Karyl (New Year)",
	"スズメ（ニューイヤー）": "Suzume (New Year)",
	"カスミ（マジカル）": "Kasumi (Magical)",
	"シオリ（マジカル）": "Shiori (magical)",
	"ウヅキ（デレマス）": "Uzuki (Delemas)",
	"リン（デレマス）": "Rin (Delemas)",
	"ミオ（デレマス）": "Mio (Delemas)",
	"リン（レンジャー）": "Rin (Ranger)",
	"マヒル（レンジャー）": "Mahir (ranger)",
	"リノ（ワンダー）": "Reno (Wonder)",
	"アユミ（ワンダー）": "Ayumi (Wonder)",
	"ルカ（サマー）": "Luka (Summer)",
	"アンナ（サマー）": "Anna (Summer)",
	"ナナカ（サマー）": "Nanaka (Summer)",
	"ハツネ（サマー）": "Hatsune (Summer)",
	"ミサト（サマー）": "Misato (Summer)",
	"ジュン（サマー）": "Jun (Summer)",
	"アカリ（エンジェル）": "Akari (Angel)",
	"ヨリ（エンジェル）": "Yori (Angel)",
	"ツムギ（ハロウィン）": "Tsumugi (Halloween)",
	"レイ（ハロウィン）": "Rei (Halloween)",
	"マツリ（ハロウィン）": "Matsuri (Halloween)",
	"モニカ（マジカル）": "Monika (magical)",
	"トモ（マジカル）": "Tomo (magical)",
	"アキノ（クリスマス）": "Akino (Christmas)",
	"サレン（クリスマス）": "Saren (Christmas)",
	"ユカリ（クリスマス）": "Yukari (Christmas)",
	"ムイミ（ニューイヤー）": "Muimi (New Year)",
	"ネネカ（ニューイヤー）": "Neneka (New Year)",
	"ヒヨリ（プリンセス）": "Hiyori (Princess)",
	"ユイ（プリンセス）": "Yui (Princess)",
	"ペコリーヌ（プリンセス）": "Pecorine (Princess)",
	"コッコロ（プリンセス）": "Kokkoro (Princess)",
	"カリン": "Karin",
	"ペテルギウス": "Betelgeuse",
	"カズマサ": "Kazumasa",
	"髑髏": "skull",
	"シルフ": "Sylph",
	"ぷちゴーレム": "Petit Golem",
	"主人公": "hero",
	"ミサキ（サマー）": "Misaki (Summer)",
	"ヒヨリ（ニューイヤー）": "Hiyori (New Year)"
}

export default translate;