import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

const PremiumScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>{t('premium.title')}</Text>
      
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>{t('premium.benefits_title')}</Text>
          <Divider style={{ marginVertical: 8 }} />
          <Text style={styles.benefit}>✅ {t('premium.benefit_1')}</Text>
          <Text style={styles.benefit}>✅ {t('premium.benefit_2')}</Text>
          <Text style={styles.benefit}>✅ {t('premium.benefit_3')}</Text>
          <Text style={styles.benefit}>✅ {t('premium.benefit_4')}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.sectionTitle}>💳 {t('premium.price')}</Text>
          <Divider style={{ marginVertical: 8 }} />
          <Text style={styles.plan}>{t('premium.monthly')}</Text>
          <Text style={styles.plan}>{t('premium.yearly')}</Text>
          <Button
            mode="contained"
            style={styles.upgradeButton}
            icon="crown"
            onPress={() => {
              // TODO: react-native-iapで購入処理を実装
              alert('購入処理はまだ未実装です');
            }}
          >
            {t('premium.upgrade')}
          </Button>
          <Button
            mode="text"
            onPress={() => navigation.goBack()}
            style={{ marginTop: 12 }}
          >
            {t('cancel')}
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 16 },
  header: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  card: { marginBottom: 16, elevation: 3 },
  sectionTitle: { fontSize: 18, fontWeight: '600', marginBottom: 8 },
  benefit: { fontSize: 15, marginBottom: 6 },
  plan: { fontSize: 16, marginBottom: 4 },
  upgradeButton: { marginTop: 12, backgroundColor: '#1976d2' },
});

export default PremiumScreen;