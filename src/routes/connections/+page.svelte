<div class="mt-20 w-full max-w-4xl">
	<h1 class="text-8xl">Connections</h1>
	<section class="mt-20 grid gap-4">
		<h2 class="text-4xl underline">Lightning</h2>
		<p class="text-2xl">
			Node runners have complete control over their Lightning nodes with fine-grained permissions,
			ranging from read-only access to full administrative control. Once a connection is
			established, data synchronization begins. Access to your nodes remains available for as long
			as you require, secured by a strong password of your choosing.
		</p>
		<!-- TODO - add all the logos for supported implementations -->
		<p class="text-2xl" />
		<ul class="text-2xl list-disc list-inside grid gap-2">
			Features:
			<li>Establish connections using LNDconnect (LND) or commando (CLN) protocols.</li>
			<li>
				Payment options include BOLT11 Invoices, KeySend, LNURL, Lightning Address (pay only), and
				BOLT12 offers (CLN only).
			</li>
			<li>Real-time updates on connection status.</li>
			<li>
				Easily disconnect and reconnect to nodes at your convenience after the initial connection.
			</li>
			<li>Option to remove a connection from the app.</li>
			<li>Node logs for monitoring and troubleshooting.</li>
			<li>Error messaging for prompt issue resolution.</li>
		</ul>
		<ul class="text-2xl list-disc list-inside grid gap-2">
			Coming soon:
			<li>WebLN connection support for Alby and other wallets.</li>
			<li>Clams Lightning Addresses with fallback payments to any of your nodes.</li>
			<li>Notifications via Nostr DM, text, or email when any of your nodes become unreachable.</li>
		</ul>
	</section>

	<section class="mt-20 grid gap-4" id="xpub">
		<h2 class="text-4xl underline">Xpub</h2>
		<p class="text-2xl">
			Connecting an Xpub is a seamless process. Simply export the Xpub from your preferred wallet
			and paste it into the app for synchronization. Xpub connections provide read-only access.
		</p>
		<ul class="text-2xl list-disc list-inside grid gap-2">
			Features:
			<li>View complete transaction history.</li>
			<li>Transaction status updates.</li>
			<li>Generate receive addresses.</li>
		</ul>
		<ul class="text-2xl list-disc list-inside grid gap-2">
			Coming soon:
			<li>Multi-sig wallets.</li>
			<li>Electrum connections.</li>
			<li>Notifications via Nostr DM, text, or email upon payment confirmation.</li>
		</ul>
	</section>
</div>
