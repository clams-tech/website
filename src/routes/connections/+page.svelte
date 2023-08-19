<section class="flex flex-col items-center">
	<div class="w-full max-w-4xl pt-20 pb-20">
		<h1 class="text-6xl">Connections</h1>
		<section class="mt-10">
			<p class="text-2xl">
				The Connections page serves as the hub for establishing and overseeing connections to your
				nodes. Once a connection is established, the process of data synchronization commences. This
				functionality is especially beneficial for power users who manage multiple nodes, enabling
				them to seamlessly synchronize data from various sources.
			</p>
			<p class="mt-10 text-2xl">
				For instance, you might operate one node for personal matters and another for your business
				dealings. Through Clams, you can derive insights and exercise control over both from a
				unified interface once these nodes are connected. Node operators always have complete
				control via fine-grained permissions that range from read-only to full full administrative
				control. Access to nodes remains available for as long as you require, secured by a strong
				password of your choosing.
			</p>
			<!-- TODO - add all the logos for supported implementations -->
			<p class="text-2xl" />
			<ul class="mt-10 text-2xl list-disc list-inside grid gap-2">
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
			<ul class="text-2xl list-disc list-inside grid gap-2 mt-10">
				Coming soon:
				<li>WebLN connection support for Alby and other wallets.</li>
				<li>
					Notifications via Nostr DM, text, or email when any of your nodes become unreachable.
				</li>
			</ul>
		</section>
		<!-- <section class="mt-20 grid gap-4" id="xpub">
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
		</section> -->
	</div>
</section>
