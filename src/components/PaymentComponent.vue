<template>
<div>
    <p class="title"> 支払い一覧: プロジェクトNo. {{ projectId }} </p>
    <div class="payment-view" v-for="payment in payments" :key="payment.paymentId">
        <p class="payment-name">
            {{ payment.name }} {{ payment.price }} 円
        </p>
        <br/>
        <p class="payment-info">
            {{ payment.category.name}}, by{{ payment.paidBy.name }}
        </p>
    </div>
</div>

</template>

<script>
import PaymentRepository from '@/repositories/payment-repository.js'

export default {
    name: "parent-component",
    components: {
    },
    props: {
        projectId: String
    },
    data() {
        return {
            payments: [],
        };
    },

    created() {
        this.fetch(this.projectId);
    },

    methods: {
        async fetch(projectId) {
            const { data } = await PaymentRepository.getAll(projectId);
            this.payments = data;
        },

    }
}

</script>

<style>
.title {
    width: 40%;
    margin: 10px auto;
    text-align: left;
}
.payment-view {
    width: 40%;
    margin: 10px auto;
    padding: 10px;
    text-align: left;
}

.payment-name {
    margin: 0px;
    font-size: 110%;
    font-weight: 600;
    color: #E4007F;
}

.payment-info {
    margin: 0px;
    font-size: 90%;
}
</style>
